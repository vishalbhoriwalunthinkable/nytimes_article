import React, { useEffect } from "react";
import { fetchArticles } from "../../apis/fetchArticles";
import { useState } from "react";
import List from "./List";

export default function Home() {
  const [info, setInfo] = useState({
    data: [],
    isFetching: false,
    isError: false,
  });

  useEffect(() => {
    setInfo({
      ...info,
      isFetching: true,
    });
    fetchArticles()
      .then((res) => {
        setInfo({
          data: res.body.results || [],
          isFetching: false,
          isError: false,
        });
      })
      .catch(() => {
        setInfo({
          ...info,
          isError: true,
        });
      });
  }, []);

  return <List info={info} />;
}
