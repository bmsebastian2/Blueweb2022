const FormError = ({ error }) => {
  return (
    <>
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500 mb-2">
          <span className="font-medium">Oh, error!</span> {error.message}.
        </p>
      )}
    </>
  );
};

export default FormError;
