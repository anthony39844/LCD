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
        query questionOfToday {
          activeDailyCodingChallengeQuestion {
            date
            link
            question {
              title
              difficulty
              frontendQuestionId: questionFrontendId
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
            matchedUser(username: $username) {
                submitStatsGlobal {
                  acSubmissionNum {
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

async function fetchUser(username: string) {
  const query = {
    query: `
      query userPublicProfile($username: String!) {
        matchedUser(username: $username) {
          profile {
            ranking
            userAvatar
            realName
          }
        }
      }
    `,
    variables: { username },
  }

  return await fetchData(query)
}

export { fetchDailyQuestion, fetchSolvedProblems, fetchUser }
  
  