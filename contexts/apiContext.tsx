import React, { createContext, useContext, ReactNode, useState } from "react";
import { fetchDailyQuestion, fetchSolvedProblems, fetchUser } from "@/api/routes";

type Difficulty = "Easy" | "Medium" | "Hard";
type question = {
    name: string;
    link: string;
    date: string;
    id: string;
    difficulty: Difficulty;
};

interface ApiContextProps {
    question: question;
    loading: boolean;
    userIcon: string;
    numSolved: {
        total: number;
        easy: number;
        medium: number;
        hard: number;
    };
    fetchData: () => void;
}
const ApiContext = createContext<ApiContextProps | undefined>(undefined);

export const ApiProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
    const [loading, setLoading] = useState(true);
    const [question, setQuestion] = useState<question>({
          name: "",
          link: "",
          date: "",
          id: "",
          difficulty: "Easy", 
        });
    const [numSolved, setNumSolved] = useState({
        total: 0,
        easy: 0,
        medium: 0,
        hard: 0
    });
    const [userIcon, setUserIcon] = React.useState('');

    const fetchData = async () => {
        try {
            const [dailyData, solvedData, userData] = await Promise.all([
              fetchDailyQuestion(),
              fetchSolvedProblems("anthony39844"),
              fetchUser("anthony39844")
            ]); 
            if (dailyData) {
                let question = dailyData.activeDailyCodingChallengeQuestion
                setQuestion({
                    name: question.question.title,
                    link: "https://leetcode.com" + question.link,
                    date: question.date,
                    id: question.question.frontendQuestionId,
                    difficulty: question.question.difficulty
                });
            }
            if (solvedData) {
                const counts = solvedData.matchedUser.submitStatsGlobal.acSubmissionNum
                setNumSolved({
                    total: counts[0].count,
                    easy: counts[1].count,
                    medium: counts[2].count,
                    hard: counts[3].count
                });
            }
            if (userData) {
              setUserIcon(userData.matchedUser.profile.userAvatar);
            }
        } catch (error) {   
        console.error("Failed to get daily question:", error);
        } finally {
            setLoading(false);
        } 
    };

  return (
    <ApiContext.Provider value={{ question, fetchData, loading, userIcon, numSolved }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("apiContext error");
  }
  return context;
};
