import { client } from "@/lib/rpc";
import { InferResponseType } from "hono";
import { useMutation } from "@tanstack/react-query";

type ResponseType = InferResponseType<
  (typeof client.api.auth)["sign-out"]["$post"]
>;

export const useSignOut = () => {
  const mutation = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const response = await client.api.auth["sign-out"]["$post"]();
      return await response.json();
    },
  });

  return mutation;
};
