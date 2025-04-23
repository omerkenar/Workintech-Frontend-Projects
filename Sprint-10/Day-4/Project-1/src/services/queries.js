import { useQuery } from "@tanstack/react-query";
import { getContactDetails, getContacts } from "./api";

export function useContacts() {
  return useQuery({ queryKey: ["contacts", "list"], queryFn: getContacts });
}

export function useContactDetails(id) {
  return useQuery({
    queryKey: ["contacts", "details", id],
    queryFn: () => getContactDetails(id),
  });
}
