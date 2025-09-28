// hooks/usePosts.ts
'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

export interface CreatePostData {
  title: string
  content: string
  area: string
}

export function usePosts(area?: string) {
  return useQuery({
    queryKey: ['posts', area],
    queryFn: async () => {
      const url = area ? `/api/posts?area=${area}` : '/api/posts'
      const response = await fetch(url)
      if (!response.ok) throw new Error('Failed to fetch posts')
      return response.json()
    }
  })
}

export function useCreatePost() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (data: CreatePostData) => {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if (!response.ok) throw new Error('Failed to create post')
      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    }
  })
}
