
import PostPreview from "./PostPreview";
import getPostMetadata from "./getPostMetadata";

const Test = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div>{postPreviews}</div>
  )
}

export default Test