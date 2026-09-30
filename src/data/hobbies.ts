import type { Hobby } from '@/types'

export const hobbiesData: Hobby[] = [
  {
    id: 'peer-mentorship',
    name: 'Peer Mentorship & Code Reviews',
    category: 'Community & Engineering Culture',
    description:
      'Guiding peers through distributed systems patterns, debugging complex concurrency issues, and reviewing PRs for connection leaks.',
    engineeringTrait: 'Empathy & Code Quality',
    iconName: 'Users',
  },
  {
    id: 'strategy-gaming',
    name: 'Strategy Games & Systems Modeling',
    category: 'Analytical Thinking',
    description:
      'Analyzing multi-step decision trees and optimizing resource allocation under asymmetric constraints and incomplete information.',
    engineeringTrait: 'Systems Thinking',
    iconName: 'Gamepad2',
  },
  {
    id: 'endurance-running',
    name: 'Endurance Running & Fitness',
    category: 'Discipline & Resilience',
    description:
      'Maintaining consistency and physical stamina through progressive distance training, mirroring the iterative mindset required for complex engineering.',
    engineeringTrait: 'Perseverance & Focus',
    iconName: 'Activity',
  },
  {
    id: 'tech-reading',
    name: 'Distributed Systems & Database Internals',
    category: 'Continuous Learning',
    description:
      'Exploring whitepapers, database storage engines (B-trees, LSM trees), and consensus algorithms to apply first-principles thinking to real-world architectures.',
    engineeringTrait: 'First-Principles Curiosity',
    iconName: 'BookOpen',
  },
]
