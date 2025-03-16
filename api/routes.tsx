async function fetchData(query: {query: string, variables: {} }) {
    const response = await fetch("https://leetcode.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(query),
      });
    
      const data = await response.json();
      return data.data
}

async function fetchDailyQuestion() {
    const query = {
      query: `
        query dailyQuestion {
          activeDailyCodingChallengeQuestion {
            date
            link
            question {
              title
              titleSlug
              difficulty
            }
          }
        }
      `,
      variables: {},
    };
    
    

    return await fetchData(query);
}

async function fetchSolvedProblems(username: string) {
    const query = {
      query: `
        query userProblemsSolved($username: String!) {
            allQuestionsCount {
                difficulty
                count
            }
            matchedUser(username: $username) {
                problemsSolvedBeatsStats {
                difficulty
                percentage
                }
                submitStatsGlobal {
                acSubmissionNum {
                    difficulty
                    count
                }
                }
            }
        }
      `,
      variables: { username },
    };

    return await fetchData(query);
}
  

export { fetchDailyQuestion, fetchSolvedProblems }
  
  