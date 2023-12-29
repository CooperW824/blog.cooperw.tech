import { defineNuxtPlugin } from "#app";
import { Amplify } from "aws-amplify";
import * as Auth from "aws-amplify/auth";
import aws_exports from "../aws-exports";

export default defineNuxtPlugin((nuxtApp) => {
  Amplify.configure(aws_exports);

  return {
    provide: {
      auth: Auth,
    },
  };
});
