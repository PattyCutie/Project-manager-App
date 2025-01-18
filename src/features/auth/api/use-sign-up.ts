import { client } from "@/lib/rpc";
import { InferRequestType, InferResponseType } from "hono";
import { useMutation } from "@tanstack/react-query";

type ResponseType = InferResponseType<
  (typeof client.api.auth)["sign-up"]["$post"]
>;

type RequestType = InferRequestType<
  (typeof client.api.auth)["sign-up"]["$post"]
>;

export const useSignUp = () => {
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => {
      const response = await client.api.auth["sign-up"]["$post"]({ json });
      return await response.json();
    },
  });

  return mutation;
};
