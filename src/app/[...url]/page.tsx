import { redis } from '@/lib/redis';
import { ragChat } from '../rag-chat';

interface ParamsProps {
  params: {
    url: string | string[] | undefined;
  };
}
function reconstructUrl({ url }: { url: string[] }) {
  const decodedComponents = url.map((component) =>
    decodeURIComponent(component)
  );

  return decodedComponents.join('/');
}

const page = async ({ params }: ParamsProps) => {
  const reconstructedUrl = reconstructUrl({ url: params.url as string[] });

  const isAlreadyIndexed = await redis.sismember(
    'indexed-urls',
    reconstructedUrl
  );

  if (!isAlreadyIndexed) {
    await ragChat.context.add({
      type: 'html',
      source: reconstructedUrl,
      config: { chunkOverlap: 50, chunkSize: 200 },
    });
  }

  return <div></div>;
};

export default page;
