"use client";

import { Card, Button, Avatar } from "@heroui/react";

export default function HiringTeamCard() {
    return (
        <Card className="w-full max-w-sm bg-[#1E1E20] border border-white/10 shadow-none rounded-2xl">
            <Card.Content className="p-1">
                {/* Title */}
                <p className="text-xs font-semibold uppercase text-zinc-500">
                    Hiring Team
                </p>

                {/* User */}
                <div className="mt-2 flex items-center gap-3">
                    <Avatar>
                        <Avatar.Image
                            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop"
                            alt="Avatar"
                            className="w-10 h-10 border-white border-2 rounded-full"
                        />
                    </Avatar>

                    <div>
                        <h3 className="text-white text-lg font-medium">
                            Sarah Chen
                        </h3>

                        <p className="text-sm text-zinc-400">
                            Head of Talent Acquisition
                        </p>
                    </div>
                </div>

                {/* Button */}
                <Button
                    radius="md"
                    variant="outline"
                    className="mt-8 h-12 rounded-lg border-2 border-white/10 bg-transparent text-white hover:bg-white/5"
                    fullWidth
                >
                    Message Team
                </Button>
            </Card.Content>
        </Card>
    );
}