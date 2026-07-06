import { createClient } from "@supabase/supabase-js";

const url = "https://hgnpucnpnhbldyazptul.supabase.co";
const key = "sb_publishable_YriCjiFNSnMNSLfT00aJ6w_-PXLmFPR";

export const supabase = createClient(url, key);