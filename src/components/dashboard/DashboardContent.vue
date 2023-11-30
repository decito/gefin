<template>
   <div class="flex-1 space-y-4 p-8 pt-6">
      <DashboardHeader />

      <Tabs default-value="overview" class="space-y-4">
         <DashboardTabsList />

         <DashboardTabsOverview />
      </Tabs>
   </div>
</template>
