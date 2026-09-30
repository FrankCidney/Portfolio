import type { Article } from '@/types'

// Note: These are structured placeholder articles reflecting Francis's core engineering domains.
// They will be updated with exact live Dev.to links and titles once provided by the user.
export const articlesData: Article[] = [
  {
    id: 'eliminating-task-starvation-in-go',
    title: 'Eliminating Task Starvation with Weighted Priority Queues in Go & Redis',
    description:
      'How to architect background worker daemons with Asynq to prevent high-volume polling from blocking urgent financial payouts.',
    publishDate: '2026',
    readTime: '6 min read',
    platform: 'Dev.to',
    url: 'https://dev.to/frankcidney',
    isPlaceholder: true,
  },
  {
    id: 'two-tier-caching-for-rag-pipelines',
    title: 'Two-Tier Caching for RAG: Cutting LLM Embedding Costs and Latency by 90%',
    description:
      'Combining SHA-256 document hashing with persistent SQLite query vector caching to eliminate redundant vectorization.',
    publishDate: '2026',
    readTime: '8 min read',
    platform: 'Dev.to',
    url: 'https://dev.to/frankcidney',
    isPlaceholder: true,
  },
  {
    id: 'zero-trust-envelope-encryption-aws-kms',
    title: 'Zero-Trust Token Cryptography: Envelope Encryption with AES-256-GCM and AWS KMS',
    description:
      'Why single .env secret keys fail in production, and how per-token DEK envelope encryption guarantees data isolation.',
    publishDate: '2026',
    readTime: '7 min read',
    platform: 'Dev.to',
    url: 'https://dev.to/frankcidney',
    isPlaceholder: true,
  },
]
