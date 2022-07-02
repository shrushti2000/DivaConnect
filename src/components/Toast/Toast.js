import { Button, useToast, Wrap, WrapItem } from "@chakra-ui/react";

const Toast = () => {
  const toast = useToast();
  const positions = [
    "top",
    "top-right",
    "top-left",
    "bottom",
    "bottom-right",
    "bottom-left",
  ];

  return (
    <Wrap>
      {positions.map((position, i) => (
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: `${position} toast`,
                position: position,
                isClosable: true,
              })
            }
          >
            Show {position} toast
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
};
export { Toast };
