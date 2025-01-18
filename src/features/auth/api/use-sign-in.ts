import { client } from "@/lib/rpc";
import { InferRequestType, InferResponseType } from "hono";
import { useMutation } from "@tanstack/react-query";

type ResponseType = InferResponseType<
  (typeof client.api.auth)["sign-in"]["$post"]
>;

type RequestType = InferRequestType<
  (typeof client.api.auth)["sign-in"]["$post"]
>;

export const useSignIn = () => {
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => {
      const response = await client.api.auth["sign-in"]["$post"]({ json });
      return await response.json();
    },
  });

  return mutation;
};
