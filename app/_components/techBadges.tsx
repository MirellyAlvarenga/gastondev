"use client";
import { motion } from "motion/react"
import { Badge } from "./badges";


interface TechBadgeProps {
    tech: string;
    key: string;
}

export default function TechBadge({ tech, key }: TechBadgeProps) {

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            key={key}
        >
            <Badge className="hover:cursor-default hover:select-none">{tech}</Badge>
        </motion.div>
    )
}