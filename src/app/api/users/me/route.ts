import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel.js"
import { connect } from "@/dbConfig/dbConfig";


// extract user info from token cookies
connect()

export async function GET(request: NextRequest){
    try {
        const userID = await getDataFromToken(request)
        const user = await User.findById({_id: userID}).select("-password");
        return NextResponse.json({
            message: "User found",
            status: 200,
            user
        })
        
    } catch (error: any) {
        console.log(error.message);
        return NextResponse.json({
            error: error.message,
            status: 400
        })
    }
}
