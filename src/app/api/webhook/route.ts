import { CreateUser } from "@/server/action";
import { NextRequest, NextResponse } from "next/server";
import { UserType } from "../../../../schema/schemaTypes";

export async function POST(req: NextRequest) {
  const payload = await req.json();
  const eventType = payload.type;
  switch (eventType) {
    case "user.created":
      const emails = payload.data.email_addresses;
      const data: UserType = {
        email: emails[0].email_address,
      };
      const user = await CreateUser(data);
      if (!user) {
        return new NextResponse(`Error: User not created`, { status: 500 });
      }
      return new NextResponse("User created", { status: 201 });
  }
}
