// import getContents from '@/actions/getContents';
// import Header from '../../components/Header';
// import PageContent from './components/PageContent';
// import Test from '@/components/test';
// // import PostPreview from '@/components/PostPreview';
// // import getPostMetadata from '@/utils/getPostMetadata';

import PostPreview from "../components/PostPreview";
import getPostMetadata from "../components/getPostMetadata";

// export const revalidate = 0;
// export const dynamic = 'force-dynamic'

// export default async function Home() {
//   const contents = await getContents()
//   // const postMetadata = getPostMetadata();
//   // const postPreviews = postMetadata.map((post) => (
//   //   <PostPreview key={post.slug} {...post} />
//   // ));

//   return (
//     <div className=" bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
//       <Header>
//         <div className="mb-2">
//           <h1
//             className="
//             text-white 
//               text-3xl 
//               font-semibold
//             ">
//             Welcome back
//           </h1>
//         </div>
//       </Header>
//       <div className="mt-2 mb-7 px-6">
//         <div className="flex justify-between items-center">
//           <h1 className="text-white text-2xl font-semibold">
//             Newest Info
//           </h1>
//           {/* <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">{postPreviews}</div> */}
//           <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
//             <Test />
//           </div>
//         </div>
//         <PageContent contents={contents} />
//       </div>
//     </div>
//   )
// }


const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
  );
};

export default HomePage;
