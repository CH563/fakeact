export interface Package {
    name: string;
    version: string;
    dependencies?: { [key: string]: string };
    size?: number;
    isDevDependency?: boolean;
    peerDependencies?: { [key: string]: string };
}

export const COMMON_PACKAGES: Package[] = [
    // React 生态系统
    {
        name: 'react',
        version: '18.2.0',
        dependencies: {
            'loose-envify': '^1.1.0',
            'object-assign': '^4.1.1',
            'prop-types': '^15.6.2'
        },
        peerDependencies: {
            'react-dom': '>=18.0.0'
        },
        size: 120345
    },
    {
        name: 'react-dom',
        version: '18.2.0',
        dependencies: {
            'loose-envify': '^1.1.0',
            'scheduler': '^0.23.0'
        },
        size: 156789
    },
    {
        name: 'react-router-dom',
        version: '6.21.1',
        dependencies: {
            '@remix-run/router': '^1.14.1',
            'react-router': '^6.21.1'
        },
        size: 98765
    },
    {
        name: 'react-query',
        version: '5.15.0',
        peerDependencies: {
            'react': '>=18.0.0'
        },
        size: 145678
    },
    {
        name: 'zustand',
        version: '4.4.7',
        size: 45678
    },
    {
        name: '@tanstack/react-table',
        version: '8.11.2',
        size: 234567
    },

    // Next.js 相关
    {
        name: 'next',
        version: '14.0.4',
        dependencies: {
            '@next/env': '14.0.4',
            '@swc/helpers': '0.5.2',
            'busboy': '1.6.0',
            'postcss': '8.4.31'
        },
        size: 856432
    },
    {
        name: 'nextjs-progressbar',
        version: '0.0.16',
        size: 12345
    },

    // Vue 生态系统
    {
        name: 'vue',
        version: '3.4.0',
        size: 345678
    },
    {
        name: 'vuex',
        version: '4.1.0',
        peerDependencies: {
            'vue': '^3.0.0'
        },
        size: 87654
    },
    {
        name: 'vue-router',
        version: '4.2.5',
        size: 98765
    },
    {
        name: 'pinia',
        version: '2.1.7',
        size: 76543
    },

    // UI 框架
    {
        name: 'tailwindcss',
        version: '3.4.0',
        dependencies: {
            'autoprefixer': '^10.4.16',
            'postcss': '^8.4.31'
        },
        size: 345678
    },
    {
        name: '@mui/material',
        version: '5.15.1',
        dependencies: {
            '@mui/base': '^5.0.0-beta.28',
            '@mui/system': '^5.15.1'
        },
        size: 567890
    },
    {
        name: '@emotion/react',
        version: '11.11.3',
        size: 123456
    },
    {
        name: '@emotion/styled',
        version: '11.11.0',
        size: 98765
    },
    {
        name: 'antd',
        version: '5.12.2',
        size: 789012
    },
    {
        name: 'chakra-ui/react',
        version: '2.8.2',
        size: 456789
    },
    {
        name: 'bootstrap',
        version: '5.3.2',
        size: 234567
    },
    {
        name: '@headlessui/react',
        version: '1.7.17',
        size: 167890
    },

    // 构建工具
    {
        name: 'typescript',
        version: '5.3.3',
        size: 220567
    },
    {
        name: 'vite',
        version: '5.0.10',
        dependencies: {
            'esbuild': '^0.19.9',
            'postcss': '^8.4.31',
            'rollup': '^4.9.1'
        },
        size: 234567
    },
    {
        name: 'webpack',
        version: '5.89.0',
        size: 567890
    },
    {
        name: 'esbuild',
        version: '0.19.10',
        size: 345678
    },
    {
        name: 'rollup',
        version: '4.9.1',
        size: 234567
    },
    {
        name: 'turbo',
        version: '1.11.2',
        size: 345678
    },
    {
        name: 'tsup',
        version: '8.0.1',
        size: 123456
    },

    // Babel 相关
    {
        name: '@babel/core',
        version: '7.23.5',
        dependencies: {
            '@babel/code-frame': '^7.23.5',
            '@babel/generator': '^7.23.5',
            '@babel/helper-compilation-targets': '^7.23.5'
        },
        size: 187654
    },
    {
        name: '@babel/preset-env',
        version: '7.23.5',
        size: 156789
    },
    {
        name: '@babel/preset-react',
        version: '7.23.5',
        size: 98765
    },
    {
        name: '@babel/preset-typescript',
        version: '7.23.5',
        size: 87654
    },

    // 测试工具
    {
        name: 'jest',
        version: '29.7.0',
        isDevDependency: true,
        dependencies: {
            '@jest/core': '^29.7.0',
            '@jest/types': '^29.7.0'
        },
        size: 432789
    },
    {
        name: 'vitest',
        version: '1.1.0',
        isDevDependency: true,
        size: 234567
    },
    {
        name: '@testing-library/react',
        version: '14.1.2',
        isDevDependency: true,
        size: 123456
    },
    {
        name: '@testing-library/jest-dom',
        version: '6.1.5',
        isDevDependency: true,
        size: 98765
    },
    {
        name: 'cypress',
        version: '13.6.1',
        isDevDependency: true,
        size: 567890
    },
    {
        name: 'playwright',
        version: '1.40.1',
        isDevDependency: true,
        size: 678901
    },

    // 代码质量工具
    {
        name: 'eslint',
        version: '8.56.0',
        isDevDependency: true,
        dependencies: {
            'eslint-scope': '^7.2.2',
            'eslint-visitor-keys': '^3.4.3'
        },
        size: 167890
    },
    {
        name: 'prettier',
        version: '3.1.1',
        isDevDependency: true,
        size: 87654
    },
    {
        name: '@typescript-eslint/eslint-plugin',
        version: '6.15.0',
        isDevDependency: true,
        size: 234567
    },
    {
        name: '@typescript-eslint/parser',
        version: '6.15.0',
        isDevDependency: true,
        size: 198765
    },
    {
        name: 'husky',
        version: '8.0.3',
        isDevDependency: true,
        size: 76543
    },
    {
        name: 'lint-staged',
        version: '15.2.0',
        isDevDependency: true,
        size: 87654
    },

    // 工具库
    {
        name: 'lodash',
        version: '4.17.21',
        size: 543210
    },
    {
        name: 'date-fns',
        version: '3.0.6',
        size: 234567
    },
    {
        name: 'zod',
        version: '3.22.4',
        size: 123456
    },
    {
        name: 'axios',
        version: '1.6.2',
        size: 156789
    },
    {
        name: 'uuid',
        version: '9.0.1',
        size: 45678
    },
    {
        name: '@tanstack/query-core',
        version: '5.14.2',
        size: 234567
    },

    // 状态管理
    {
        name: 'redux',
        version: '5.0.0',
        size: 123456
    },
    {
        name: '@reduxjs/toolkit',
        version: '2.0.1',
        dependencies: {
            'redux': '^5.0.0'
        },
        size: 234567
    },
    {
        name: 'recoil',
        version: '0.7.7',
        size: 187654
    },
    {
        name: 'jotai',
        version: '2.6.0',
        size: 98765
    },

    // 表单处理
    {
        name: 'react-hook-form',
        version: '7.49.2',
        size: 156789
    },
    {
        name: 'formik',
        version: '2.4.5',
        size: 145678
    },
    {
        name: '@hookform/resolvers',
        version: '3.3.2',
        size: 87654
    },

    // 动画库
    {
        name: 'framer-motion',
        version: '10.16.16',
        size: 345678
    },
    {
        name: 'react-spring',
        version: '9.7.3',
        size: 234567
    },
    {
        name: 'gsap',
        version: '3.12.4',
        size: 456789
    },

    // 图表库
    {
        name: 'chart.js',
        version: '4.4.1',
        size: 345678
    },
    {
        name: '@nivo/core',
        version: '0.84.0',
        size: 234567
    },
    {
        name: 'd3',
        version: '7.8.5',
        size: 567890
    },
    {
        name: 'echarts',
        version: '5.4.3',
        size: 789012
    },

    // 开发工具
    {
        name: 'nodemon',
        version: '3.0.2',
        isDevDependency: true,
        size: 123456
    },
    {
        name: 'concurrently',
        version: '8.2.2',
        isDevDependency: true,
        size: 87654
    },
    {
        name: 'cross-env',
        version: '7.0.3',
        isDevDependency: true,
        size: 45678
    },
    {
        name: 'dotenv',
        version: '16.3.1',
        size: 34567
    },

    // Node.js 框架
    {
        name: 'express',
        version: '4.18.2',
        size: 234567
    },
    {
        name: '@nestjs/core',
        version: '10.3.0',
        size: 345678
    },
    {
        name: 'fastify',
        version: '4.25.1',
        size: 198765
    },
    {
        name: 'koa',
        version: '2.14.2',
        size: 167890
    },

    // API 工具
    {
        name: 'graphql',
        version: '16.8.1',
        size: 234567
    },
    {
        name: '@apollo/client',
        version: '3.8.8',
        size: 456789
    },
    {
        name: 'swagger-ui-express',
        version: '5.0.0',
        size: 123456
    },

    // 数据库
    {
        name: 'prisma',
        version: '5.7.1',
        size: 567890
    },
    {
        name: 'mongoose',
        version: '8.0.3',
        size: 345678
    },
    {
        name: 'typeorm',
        version: '0.3.17',
        size: 456789
    },

    // 安全相关
    {
        name: 'jsonwebtoken',
        version: '9.0.2',
        size: 98765
    },
    {
        name: 'bcryptjs',
        version: '2.4.3',
        size: 76543
    },
    {
        name: 'helmet',
        version: '7.1.0',
        size: 87654
    },

    // 文档工具
    {
        name: '@storybook/react',
        version: '7.6.6',
        isDevDependency: true,
        size: 567890
    },
    {
        name: 'typedoc',
        version: '0.25.4',
        isDevDependency: true,
        size: 234567
    },
    {
        name: 'jsdoc',
        version: '4.0.2',
        isDevDependency: true,
        size: 198765
    },

    // 性能监控
    {
        name: '@sentry/react',
        version: '7.91.0',
        size: 234567
    },
    {
        name: 'web-vitals',
        version: '3.5.0',
        size: 87654
    }
];