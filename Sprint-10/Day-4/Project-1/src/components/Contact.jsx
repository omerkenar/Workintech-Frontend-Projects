import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDeleteContact } from "../services/mutations";
import { useContactDetails } from "../services/queries";

export default function Contact() {
  const { contactId } = useParams();
  const { isPending, error, data: contact } = useContactDetails(contactId);
  const deleteContact = useDeleteContact();
  const history = useHistory();

  if (isPending) return "loading";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.avatar || null} />
      </div>

      <div>
        <h1 data-testid="full_name">
          {contact.first_name || contact.last_name ? (
            <>
              {contact.first_name} {contact.last_name}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
        </h1>

        {contact.email && (
          <p>
            <a
              target="_blank"
              href={`mailto:${contact.email}`}
              rel="noreferrer"
            >
              {contact.email}
            </a>
          </p>
        )}

        {contact.description && <p>{contact.description}</p>}

        <div>
          <button
            className="delete"
            onClick={() => {
              deleteContact.mutate(contactId);
              history.push("/");
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
