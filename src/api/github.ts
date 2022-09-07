import axios from "axios";
import { BasicResult } from "#/resultType";
import { http } from "@/utils/http";

export type GithubCommitResultType = {
  commit: {
    author: {
      date: string;
    };
    message: string;
  };
  html_url: string;
};

export type contentType = {
  message: string;
  html_url: string;
};

/**
 *
 * @description 获取仓库commit信息
 */
export const fetchCommits = (user: string, repo: string, token: string) => {
  const url = `https://api.github.com/repos/${user}/${repo}/commits?access_token=${token}`;
  return new Promise<BasicResult<GithubCommitResultType[]>>(async (resolve, reject) => {
    try {
      const res = await axios.get<{}, BasicResult<GithubCommitResultType[]>>(url, {
        headers: {
          // token30天需要更换一次
          Authorization: "Bearer " + token
        }
      });
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *
 * @description 获取仓库commit信息（假数据）
 */
export const fetchMockCommits = () => {
  return new Promise<BasicResult<GithubCommitResultType[]>>(async (resolve, reject) => {
    try {
      const res = await http.get<{}, BasicResult<GithubCommitResultType[]>>("/commits");
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};
