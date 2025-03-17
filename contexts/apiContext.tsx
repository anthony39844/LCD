import React, { createContext, useContext, ReactNode, useState } from "react";
import { fetchDailyQuestion, fetchSolvedProblems, fetchUser } from "@/api/routes";

type Difficulty = "Easy" | "Medium" | "Hard";
interface ApiContextProps {
    question: {
      name: string;
      link: string;
      date: string;
      id: string;
      difficulty: Difficulty;
    };
    loading: boolean;
    userIcon: string;
    numSolved: {
        total: number;
        easy: number;
        medium: number;
        hard: number;
    };
    fetchUserData: () => void;
    fetchDailyLeetCodeQuestion: () => void;

}
const ApiContext = createContext<ApiContextProps | undefined>(undefined);

export const ApiProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
    const [loading, setLoading] = useState(true);
    const [question, setQuestion] = 
        useState<{
          name: string;
          link: string;
          date: string;
          id: string;
          difficulty: Difficulty;
        }>({
          name: "",
          link: "",
          date: "",
          id: "",
          difficulty: "Easy", 
        });
    const [numSolved, setNumSolved] = React.useState({
        total: 0,
        easy: 0,
        medium: 0,
        hard: 0
    });
    const [userIcon, setUserIcon] = React.useState('');

    const fetchDailyLeetCodeQuestion = async () => {
        try {
            const data = await fetchDailyQuestion();
            if (data) {
                let question = data.activeDailyCodingChallengeQuestion
                setQuestion({
                    name: question.question.title,
                    link: "https://leetcode.com" + question.link,
                    date: question.date,
                    id: question.question.frontendQuestionId,
                    difficulty: question.question.difficulty
                });
            }
        } catch (error) {   
        console.error("Failed to get daily question:", error);
        } finally {
            setLoading(false);
        }
    };

    
    const fetchUserData = async () => {
        try {
            const solvedData = await fetchSolvedProblems("anthony39844");
            const userData = await fetchUser("anthony39844");
            if (solvedData && userData) {
              const counts = solvedData.matchedUser.submitStatsGlobal.acSubmissionNum
              setNumSolved({
                total: counts[0].count,
                easy: counts[1].count,
                medium: counts[2].count,
                hard: counts[3].count
              });
              setUserIcon(userData.matchedUser.profile.userAvatar);
            }
        } catch (error) {
            console.error("Failed to fetch data:", error);
        } finally {
            setLoading(false);
        }
    }


  return (
    <ApiContext.Provider value={{ question, fetchDailyLeetCodeQuestion, loading, fetchUserData, userIcon, numSolved }}>
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
