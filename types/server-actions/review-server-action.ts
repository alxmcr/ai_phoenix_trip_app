// Define types for the server action response
export type ReviewServerActionResponse = {
  errors?: {
    root?: string;
    [key: string]: string[] | string | undefined;
  };
  review_id?: string;
};
