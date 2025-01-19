import { client } from "@/lib/rpc";
import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

type ResponseType = InferResponseType<
  (typeof client.api.auth)["sign-in"]["$post"]
>;

type RequestType = InferRequestType<
  (typeof client.api.auth)["sign-in"]["$post"]
>;

export const useSignIn = () => {
  const router = useRouter();
  const queryclient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => {
      const response = await client.api.auth["sign-in"]["$post"]({ json });
      return await response.json();
    },
    onSuccess: () => {
      router.refresh();
      queryclient.invalidateQueries({ queryKey: ["current"] });
    },
  });

  return mutation;
};
