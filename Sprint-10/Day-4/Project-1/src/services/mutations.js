import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addContact, deleteContact } from "./api";

export function useAddContact() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => addContact(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["contacts", "list"] });
    },
  });
}

export function useDeleteContact() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteContact(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["contacts", "list"] });
      await queryClient.invalidateQueries({
        queryKey: ["contacts", "details", id],
      });
    },
  });
}
