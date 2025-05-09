import { DownloadIcon, FilterIcon, TrendingUpIcon } from "lucide-react";
import Container from "../global/container";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";
import Image from "next/image";

const Analysis = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        Intelligent resume  <br /><span className="font-subheading italic">dashboard</span>
                    </h2>
                    <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                    Get detailed insights into your resume's performance and application success with myjobb Resume AI.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative w-full">

                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-blue-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    1. Personalise your Job Search
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Get personalised job search according to your domain.
                                </p>

                                <div className="mt-6 w-full bg-card/50 overflow-hidden">
                                <Image
                                    src="/images/Preferences.svg"
                                    alt="step1"
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                            </div> 
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-blue-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    2. Upload your resume
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Upload your AI enhanced resume.
                                </p>

                                <div className="mt-6 w-full bg-card/50 overflow-hidden">
                                <Image
                                    src="/images/Upload_resume.svg"
                                    alt="step1"
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                            </div> 
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-blue-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    3. Get Hyper-Relevant Job Matches
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Browse through the thousand's personalized job notices.
                                </p>

                                <div className="mt-6 w-full bg-card/50 overflow-hidden">
                                <Image
                                    src="/images/Relevant_jobs.svg"
                                    alt="step1"
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                            </div> 
                            </div>
                        </MagicCard>
                    </div>
                </Container>
                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-blue-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    4. Apply Instantly
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Track your campaign performance with data-driven insights.
                                </p>

                                <div className="mt-6 w-full bg-card/50 overflow-hidden">
                                <Image
                                    src="/images/ApplyNow.svg"
                                    alt="step1"
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                            </div> 
                            </div>
                        </MagicCard>
                    </div>
                </Container>


            </div>
        </div>
    )
};

export default Analysis;
