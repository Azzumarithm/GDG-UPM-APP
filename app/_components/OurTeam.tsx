"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import TeamCard from "./ui/TeamCard"
import { useState } from "react"


type OurTeam = {
    teamRef: React.RefObject<HTMLDivElement>;
}

const OurTeam = ({ teamRef }: OurTeam) => {

    const [selectedTeam, setSelectedTeam] = useState<keyof typeof team>("topBoard");

    const handleSelectTeam = (teamName: keyof typeof team) => {
        setSelectedTeam(teamName);
    };


    // Change team from an array to an object
    const team = {
        topBoard: [
            {
                name: "Ngooi Xue Yang",
                role: "Secretary",
                image: "AJ"
            },
            {
                name: "Zikry Zaherman",
                role: "Vice-Secretary",
                image: "AJ"
            },
            {
                name: "Lim Lizhe",
                role: "Treasurer",
                image: "AJ"
            },
            {
                name: "Ngooi Xue Yang",
                role: "Secretary",
                image: "AJ"
            },
            {
                name: "Zikry Zaherman",
                role: "Vice-Secretary",
                image: "AJ"
            },
            {
                name: "Lim Lizhe",
                role: "Treasurer",
                image: "AJ"
            },
            {
                name: "Ngooi Xue Yang",
                role: "Secretary",
                image: "AJ"
            },


        ],
        webApp: [
            {
                name: "Ngooi Xue Yang",
                role: "Secretary",
                image: "AJ"
            },
            {
                name: "Zikry Zaherman",
                role: "Vice-Secretary",
                image: "AJ"
            },
            {
                name: "Lim Lizhe",
                role: "Treasurer",
                image: "AJ"
            }
        ],
        mobileApp: [
            {
                name: "Ngooi Xue Yang",
                role: "Secretary",
                image: "AJ"
            },
            {
                name: "Zikry Zaherman",
                role: "Vice-Secretary",
                image: "AJ"
            },
            {
                name: "Lim Lizhe",
                role: "Treasurer",
                image: "AJ"
            },
            {
                name: "Lim Lizhe",
                role: "Treasurer",
                image: "AJ"
            },
        ],
        cloud: [
            {
                name: "Ngooi Xue Yang",
                role: "Secretary",
                image: "AJ"
            },
            {
                name: "Zikry Zaherman",
                role: "Vice-Secretary",
                image: "AJ"
            },
            {
                name: "Lim Lizhe",
                role: "Treasurer",
                image: "AJ"
            },
        ],
        aiMl: [
            {
                name: "Ngooi Xue Yang",
                role: "Secretary",
                image: "AJ"
            },
            {
                name: "Zikry Zaherman",
                role: "Vice-Secretary",
                image: "AJ"
            },
            {
                name: "Lim Lizhe",
                role: "Treasurer",
                image: "AJ"
            },
            {
                name: "Lim Lizhe",
                role: "Treasurer",
                image: "AJ"
            },
        ],
        cyberSecurity: [
            {
                name: "Ngooi Xue Yang",
                role: "Secretary",
                image: "AJ"
            },
            {
                name: "Zikry Zaherman",
                role: "Vice-Secretary",
                image: "AJ"
            },
            {
                name: "Lim Lizhe",
                role: "Treasurer",
                image: "AJ"
            },
            {
                name: "Lim Lizhe",
                role: "Treasurer",
                image: "AJ"
            },
        ],
        uiUx: [
            {
                name: "Ngooi Xue Yang",
                role: "Secretary",
                image: "AJ"
            },
            {
                name: "Zikry Zaherman",
                role: "Vice-Secretary",
                image: "AJ"
            },
            {
                name: "Lim Lizhe",
                role: "Treasurer",
                image: "AJ"
            },
            {
                name: "Lim Lizhe",
                role: "Treasurer",
                image: "AJ"
            },
        ],
        communitySocials: [
            {
                name: "Ngooi Xue Yang",
                role: "Secretary",
                image: "AJ"
            },
            {
                name: "Zikry Zaherman",
                role: "Vice-Secretary",
                image: "AJ"
            },
            {
                name: "Lim Lizhe",
                role: "Treasurer",
                image: "AJ"
            },
            {
                name: "Lim Lizhe",
                role: "Treasurer",
                image: "AJ"
            },
        ],
        creatives: [
            {
                name: "Ngooi Xue Yang",
                role: "Secretary",
                image: "AJ"
            },
            {
                name: "Ngooi Xue Yang",
                role: "Secretary",
                image: "AJ"
            },
            {
                name: "Zikry Zaherman",
                role: "Vice-Secretary",
                image: "AJ"
            },
            {
                name: "Lim Lizhe",
                role: "Treasurer",
                image: "AJ"
            },
            {
                name: "Lim Lizhe",
                role: "Treasurer",
                image: "AJ"
            },
        ],
        externalRelations: [
            {
                name: "Ngooi Xue Yang",
                role: "Secretary",
                image: "AJ"
            },
            {
                name: "Zikry Zaherman",
                role: "Vice-Secretary",
                image: "AJ"
            },
            {
                name: "Lim Lizhe",
                role: "Treasurer",
                image: "AJ"
            },
        ]
    };



    const buttons = [
        { label: "Top Board", team: "topBoard", color: "bg-black text-yellow-400", selectedColor: "bg-gradient-to-tr from-[#d596d9] to-[#fdc0c4]" },
        { label: "Web App", team: "webApp", color: "bg-black text-yellow-400", selectedColor: "bg-gradient-to-tr from-[#d596d9] to-[#fdc0c4]" },
        { label: "Mobile App", team: "mobileApp", color: "bg-black text-green-400", selectedColor: "bg-gradient-to-tr from-[#d596d9] to-[#fdc0c4]" },
        { label: "Cloud", team: "cloud", color: "bg-black text-pink-400", selectedColor: "bg-gradient-to-tr from-[#d596d9] to-[#fdc0c4]" },
        { label: "AI/ML", team: "aiMl", color: "bg-black text-gray-300", selectedColor: "bg-gradient-to-tr from-[#d596d9] to-[#fdc0c4]" },
        { label: "Cyber-security", team: "cyberSecurity", color: "bg-black text-red-400", selectedColor: "bg-red-400 text-black" },
        { label: "UI/UX", team: "uiUx", color: "bg-black text-yellow-400", selectedColor: "bg-yellow-400 text-black" },
        { label: "Community & Socials", team: "communitySocials", color: "bg-black text-blue-300", selectedColor: "bg-blue-300 text-black" },
        { label: "Creatives", team: "creatives", color: "bg-black text-purple-400", selectedColor: "bg-purple-400 text-black" },
        { label: "External Relations", team: "externalRelations", color: "bg-black text-pink-300", selectedColor: "bg-pink-300 text-black" },
    ];

    return (
        <>
            <section>
                <motion.section
                    ref={teamRef}
                    className="space-y-6"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <h2 className="text-3xl font-bold text-center">Our Team</h2>

                        <div className={"flex gap-x-16 justify-center py-10"}>
                            <TeamCard />
                            <TeamCard />
                        </div>

                    </div>



                    <div className={"bg-gradient-to-tr from-[#d596d9] to-[#fdc0c4] border rounded-lg"}>

                        <h2 className="text-3xl font-bold text-center mt-4">Top Board</h2>
                        <div className="flex flex-wrap gap-x-16 gap-y-4 justify-center items-center px-20 py-10">
                            {team[selectedTeam].map((member: any, index: any) => (
                                <TeamCard />
                            ))}
                            {/* {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card>
                                <CardHeader className="flex items-center">
                                    <Avatar className="h-16 w-16">
                                        <AvatarImage src={`/placeholder.svg?height=64&width=64&text=${member.avatar}`} alt={member.name} />
                                        <AvatarFallback>{member.avatar}</AvatarFallback>
                                    </Avatar>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <CardTitle>{member.name}</CardTitle>
                                    <p className="text-sm text-muted-foreground">{member.role}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))} */}
                        </div>
                    </div>

                    <div className={"flex flex-wrap gap-4 justify-center"}>
                        {buttons.map((btn, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded-full font-medium ${selectedTeam === btn.team ? btn.selectedColor : btn.color} shadow-md transition-transform transform hover:scale-105`}
                                onClick={() => handleSelectTeam(btn.team as keyof typeof team)}
                            >
                                {btn.label}
                            </button>
                        ))}
                    </div>
                </motion.section>
            </section>

        </>
    )
}
export default OurTeam