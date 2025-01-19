import { client } from "@/lib/rpc";
import { InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

type ResponseType = InferResponseType<
  (typeof client.api.auth)["sign-out"]["$post"]
>;

export const useSignOut = () => {
  const router = useRouter();
  const queryclient = useQueryClient();

  const mutation = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const response = await client.api.auth["sign-out"]["$post"]();
      return await response.json();
    },
    onSuccess: () => {
      router.refresh();
      queryclient.invalidateQueries({ queryKey: ["current"] });
    },
  });

  return mutation;
};
