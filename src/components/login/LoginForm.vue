<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { FormField } from '@/components/ui/form'
import { RocketIcon } from '@radix-icons/vue'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { useForm } from 'vee-validate'
import useUserStore from '@/stores/user'
import { useRouter } from 'vue-router'

const store = useUserStore()
const { authenticate } = store
const router = useRouter()

const formSchema = toTypedSchema(
   z.object({
      email: z.string().email().min(3)
   })
)

const form = useForm({
   validationSchema: formSchema
})

const isLoading = ref(false)

const onSubmit = form.handleSubmit(values => {
   console.log('Form submitted!', values)

   isLoading.value = true

   setTimeout(() => {
      authenticate()
      router.push({ name: 'dashboard' })
   }, 3000)
})
</script>

<template>
   <div :class="cn('grid gap-6', $attrs.class ?? '')">
      <form @submit="onSubmit">
         <div class="grid gap-2">
            <div class="grid gap-1">
               <FormField v-slot="{ componentField }" name="email">
                  <FormItem>
                     <FormLabel class="sr-only" for="email"> Email </FormLabel>
                     <FormControl>
                        <Input
                           id="email"
                           placeholder="name@example.com"
                           type="email"
                           auto-capitalize="none"
                           auto-complete="email"
                           auto-correct="off"
                           v-bind="componentField"
                           :disabled="isLoading"
                        />
                     </FormControl>

                     <FormDescription>
                        This is your public display name.
                     </FormDescription>
                     <FormMessage />
                  </FormItem>
               </FormField>
            </div>
            <Button :disabled="isLoading">
               <RocketIcon
                  v-if="isLoading"
                  class="mr-2 h-4 w-4 animate-pulse"
               />
               Sign In with Email
            </Button>
         </div>
      </form>
      <div class="relative">
         <div class="absolute inset-0 flex items-center">
            <span class="w-full border-t" />
         </div>
         <div class="relative flex justify-center text-xs uppercase">
            <span class="bg-background px-2 text-muted-foreground">
               Or continue with
            </span>
         </div>
      </div>
      <Button variant="outline" type="button" :disabled="isLoading">
         <LucideSpinner v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
         <GitHubLogo v-else class="mr-2 h-4 w-4" />
         GitHub
      </Button>
   </div>
</template>
