import { Camera } from "@phosphor-icons/react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Text } from "./Text";


interface DropzoneProps {
  onFileUploaded: (file: File) => void;
}
export function Dropzone({ onFileUploaded }: DropzoneProps) {
  const [selectedFileURL, setSelectedFileUrl] = useState("");

  const onDrop = useCallback(
    (acceptedFiles: any[]) => {
      const file = acceptedFiles[0];
      console.log(file)
      
      const fileURL = URL.createObjectURL(file);
      console.log(fileURL)

      setSelectedFileUrl(fileURL);
      onFileUploaded(file);
    },
    [onFileUploaded]
  );
  const { getInputProps, getRootProps} = useDropzone({ onDrop })
  return (
    <div className='flex mt-4 ' {...getRootProps()}>
      <input {...getInputProps()}  onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSelectedFileUrl(e.target.value)}
  />
  
      {selectedFileURL ? (
        <img src={selectedFileURL}  className="max-96 rounded-lg" />
      ) : (
        <div className="bg-gray-dark rounded w-full px-3 h-12 flex gap-2 items-center cursor-pointer">
          <Camera size={24} weight="fill" className="text-gray-regular" />
          <Text size="sm" className="text-gray-regular font-normal">
            Selecione um arquivo de imagem
          </Text>
        </div>
      )}
    </div>
  )
}
  
  
