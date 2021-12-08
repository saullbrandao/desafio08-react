import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="4xl"
      isCentered
      blockScrollOnMount
    >
      <ModalOverlay />
      <ModalContent maxW="900px">
        <ModalBody p={0}>
          <Image src={imgUrl} w="auto" h="auto" />
        </ModalBody>
        <ModalFooter
          h={8}
          px="10px"
          py={2}
          display="flex"
          justifyContent="start"
          bg="pGray.800"
        >
          <Link href={imgUrl} target="_blank" color="pGray.50">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
