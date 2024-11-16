import { waitFor } from "@/lib/helper/waitFor";
import Loading from "./loading";
import { SetupUser } from "@/actions/billing/setupUser";

export default async function SetupPage() {
  return await SetupUser();
}
