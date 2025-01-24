"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Grid2X2, List } from "lucide-react"
import { useRouter } from "next/navigation"
import { CartIcon } from "./CartIcon"
export function ViewToggle() {
  const [view, setView] = useState<"grid" | "list">("grid")
  const router = useRouter()

  const handleViewChange = (newView: "grid" | "list") => {
    setView(newView)
    router.push(`/?view=${newView}`, { scroll: false })
  }

  return (
    <div className="flex space-x-2">
      <Button variant={view === "grid" ? "secondary" : "outline"} size="icon" onClick={() => handleViewChange("grid")}>
        <Grid2X2 className="h-4 w-4" />
      </Button>
      <Button variant={view === "list" ? "secondary" : "outline"} size="icon" onClick={() => handleViewChange("list")}>
        <List className="h-4 w-4" />
      </Button>
      <CartIcon />
    </div>
  )
}

