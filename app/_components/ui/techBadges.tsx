"use client";
import { motion } from "motion/react"
import { Badge } from "./badges";


interface TechBadgeProps {
    tech: string;
    id?: string;
}

export default function TechBadge({ tech, id }: TechBadgeProps) {

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            key={id}
        >
            <Badge className="hover:cursor-default hover:select-none">{tech}</Badge>
        </motion.div>
    )
}