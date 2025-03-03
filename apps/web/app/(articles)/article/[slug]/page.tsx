import { dehydrate } from "@tanstack/query-core";
import { Suspense } from "react";
import getQueryClient from "../../../../lib/get-query-clinet";
import { queryKeys } from "../../_constants/querykeys";
import { getArticle } from "../../_api/get-article";
import Hydrate from "../../../../lib/query-hydrate";
import { ArticleDetail } from "../../_components/article-detail";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default async function ArticlePage({ params }: ArticlePageProps): Promise<JSX.Element> {
  const { slug } = params;

  if (!slug) {
    throw new Error("ERROR : article path is not found");
  }

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(queryKeys.article(slug), () => getArticle(slug));
  const dehydrateState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydrateState}>
      <Suspense fallback={<div>loading...</div>}>
        <ArticleDetail slug={slug} />
      </Suspense>
    </Hydrate>
  );
}
