"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GlobalLeaderboard } from "@/components/leaderboard/global-leaderboard"
import { CollegeLeaderboard } from "@/components/leaderboard/college-leaderboard"
import { DepartmentLeaderboard } from "@/components/leaderboard/department-leaderboard"

export function LeaderboardTabs() {
  return (
    <Tabs defaultValue="global" className="space-y-6">
      <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
        <TabsTrigger value="global">Global</TabsTrigger>
        <TabsTrigger value="college">By College</TabsTrigger>
        <TabsTrigger value="department">By Department</TabsTrigger>
      </TabsList>

      <TabsContent value="global">
        <GlobalLeaderboard />
      </TabsContent>

      <TabsContent value="college">
        <CollegeLeaderboard />
      </TabsContent>

      <TabsContent value="department">
        <DepartmentLeaderboard />
      </TabsContent>
    </Tabs>
  )
}
