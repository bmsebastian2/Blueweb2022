import swicthError from "./funcionSwicthError";
import formValidate from "./formValidate";

const setColorError = (error) =>
  !error
    ? {
        colorErrorLabel:
          "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",

        colorErrorInput:
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
      }
    : {
        colorErrorLabel:
          "block mb-2 text-sm font-medium text-red-700 dark:text-red-500",
        colorErrorInput:
          "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500",
      };

export { swicthError, formValidate, setColorError };
