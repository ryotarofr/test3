"use client"

import { FC } from "react"
import { TbPlaylist } from "react-icons/tb"
import { AiOutlinePlus } from "react-icons/ai"

import useAuthModal from "../hooks/useAuthModal"
import useUploadModal from "../hooks/useUploadModal"
import { useUser } from "../hooks/useUser"
import { Content } from "../types"
import MediaItem from "./MediaItem"
import useOnPlay from "../hooks/useOnPlay"
import useSubscribeModal from "../hooks/useSubscribeModal"


interface LibraryProps {
  contents: Content[],
}

const Library: FC<LibraryProps> = ({ contents }) => {
  const authModal = useAuthModal()
  const uploadModal = useUploadModal()
  const subscribeModal = useSubscribeModal();
  const { user, subscription } = useUser()

  const onPlay = useOnPlay(contents)

  const onClick = () => {
    if (!user) {
      return authModal.onOpen()
    }

    if (!subscription) {
      return subscribeModal.onOpen();
    }

    return uploadModal.onOpen()
  }
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className=" text-neutral-400 font-medium text-base">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="
            text-neutral-400
            cursor-pointer
            hover:text-white
            transition
          "
        />
      </div>
      <div className=" gap-y-2 mt-4 px-3">
        {contents.map((item) => (
          <MediaItem
            onClick={(id: string) => onPlay(id)}
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </div>
  )
}

export default Library