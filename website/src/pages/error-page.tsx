import { useRouteError } from "react-router-dom";

interface Error {
  statusText: string | undefined;
  message: string | undefined;
}

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{(error as Error).statusText || (error as Error).message}</i>
      </p>
    </div>
  );
}
