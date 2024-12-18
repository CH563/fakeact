import { getRandomItem } from './helpers.js';

// 基础页面组件
const BASE_COMPONENTS = [
    'page',
    'layout',
    'template',
    'view',
    'screen',
    'container',
];

// 业务领域
const DOMAINS = [
    'auth',
    'user',
    'admin',
    'blog',
    'shop',
    'product',
    'order',
    'payment',
    'dashboard',
    'settings',
    'profile',
    'notification',
    'message',
    'chat',
    'report',
    'analytics',
];

// 动作/功能
const ACTIONS = [
    'create',
    'edit',
    'view',
    'delete',
    'list',
    'manage',
    'export',
    'import',
    'preview',
    'review',
    'approve',
    'reject',
];

// 预设页面路径
const PRESET_PAGES = [
    // 系统基础页面
    'pages/_app.tsx',
    'pages/_document.tsx',
    'pages/404.tsx',
    'pages/500.tsx',
    'pages/index.tsx',
    
    // 认证相关
    'pages/auth/login.tsx',
    'pages/auth/register.tsx',
    'pages/auth/forgot-password.tsx',
    'pages/auth/reset-password.tsx',
    'pages/auth/verify-email.tsx',
    'pages/auth/[provider].tsx',
    'pages/auth/[...nextauth].ts',
    
    // 用户相关
    'pages/user/profile.tsx',
    'pages/user/settings.tsx',
    'pages/user/notifications.tsx',
    'pages/user/[id].tsx',
    'pages/user/[id]/edit.tsx',
    'pages/users/index.tsx',
    
    // 管理后台
    'pages/admin/index.tsx',
    'pages/admin/dashboard.tsx',
    'pages/admin/users/index.tsx',
    'pages/admin/users/[id].tsx',
    'pages/admin/settings.tsx',
    'pages/admin/logs.tsx',
    
    // 博客系统
    'pages/blog/index.tsx',
    'pages/blog/[slug].tsx',
    'pages/blog/category/[category].tsx',
    'pages/blog/tag/[tag].tsx',
    'pages/blog/author/[author].tsx',
    
    // 电商相关
    'pages/shop/index.tsx',
    'pages/shop/products/index.tsx',
    'pages/shop/products/[id].tsx',
    'pages/shop/products/[id]/edit.tsx',
    'pages/shop/categories/[category].tsx',
    'pages/shop/cart.tsx',
    'pages/shop/checkout.tsx',
    'pages/shop/orders/index.tsx',
    'pages/shop/orders/[id].tsx',
    
    // API 路由
    'pages/api/auth/[...nextauth].ts',
    'pages/api/users/index.ts',
    'pages/api/users/[id].ts',
    'pages/api/products/index.ts',
    'pages/api/products/[id].ts',
    'pages/api/orders/index.ts',
    'pages/api/orders/[id].ts',
    'pages/api/webhooks/stripe.ts',
    'pages/api/webhooks/github.ts',
    
    // App 路由 (新版 Next.js)
    'app/layout.tsx',
    'app/page.tsx',
    'app/loading.tsx',
    'app/error.tsx',
    'app/not-found.tsx',
    'app/(auth)/layout.tsx',
    'app/(auth)/login/page.tsx',
    'app/(auth)/register/page.tsx',
    'app/(main)/layout.tsx',
    'app/(main)/dashboard/page.tsx',
    'app/(main)/profile/page.tsx',
];

// 文件扩展名
const FILE_EXTENSIONS = [
    '.tsx',
    '.ts',
    '.jsx',
    '.js',
];

// 模拟的警告消息
const WARNING_MESSAGES = [
    'Invalid configuration in next.config.js',
    'Duplicate atom key detected in jotai store',
    'Missing "key" prop for element in array',
    'Potential memory leak detected in useEffect',
    'Large page bundle size detected',
    'Deprecated API usage found',
    'Missing meta description tag',
];

// 模拟的错误消息
const ERROR_MESSAGES = [
    'Failed to resolve import "../components/Missing"',
    'Unexpected token in JSON at position 4',
    'Cannot read properties of undefined (reading "map")',
    'ChunkLoadError: Loading chunk [number] failed',
    'TypeError: Cannot destructure property "data" of undefined',
];

// 模拟的构建信息消息
const INFO_MESSAGES = [
    'Creating an optimized production build',
    'Compiling files with webpack',
    'Collecting page data',
    'Generating static pages',
    'Processing images',
    'Optimizing fonts',
    'Compressing assets',
];

// 随机生成路径段
function generatePathSegment(): string {
    const patterns = [
        () => getRandomItem(DOMAINS),
        () => `${getRandomItem(DOMAINS)}-${getRandomItem(ACTIONS)}`,
        () => `[${getRandomItem(['id', 'slug', 'uuid', 'username'])}]`,
        () => `[...${getRandomItem(['slug', 'path', 'params'])}]`,
    ];
    
    return getRandomItem(patterns)();
}

// 生成随机页面路径
function generateRandomPage(): string {
    const depth = Math.floor(Math.random() * 3) + 1; // 1-3 层深度
    const segments: string[] = [];
    
    // 添加基础目录
    segments.push(Math.random() > 0.3 ? 'pages' : 'app');
    
    // 可能添加分组
    if (Math.random() > 0.7) {
        segments.push(`(${getRandomItem(DOMAINS)})`);
    }
    
    // 生成路径段
    for (let i = 0; i < depth; i++) {
        segments.push(generatePathSegment());
    }
    
    // 添加页面组件名
    if (segments[0] === 'app') {
        segments.push(getRandomItem([
            'page',
            'loading',
            'error',
            'layout',
            'template',
        ]));
    }
    
    // 添加文件扩展名
    return `${segments.join('/')}${getRandomItem(FILE_EXTENSIONS)}`;
}

// 页面生成器类
class NextJsPagesGenerator {
    private totalPages: number;
    private includePreset: boolean;
    
    constructor(totalPages: number = 50, includePreset: boolean = true) {
        this.totalPages = totalPages;
        this.includePreset = includePreset;
    }
    
    generate(): string[] {
        const pages = new Set<string>();
        
        // 添加预设页面
        if (this.includePreset) {
            PRESET_PAGES.forEach(page => pages.add(page));
        }
        
        // 生成随机页面直到达到目标数量
        while (pages.size < this.totalPages) {
            pages.add(generateRandomPage());
        }
        
        return Array.from(pages).sort();
    }
}

// 使用示例
function generatePages(count: number = 50, includePreset: boolean = true): string[] {
    const generator = new NextJsPagesGenerator(count, includePreset);
    return generator.generate();
}

// 导出工具函数和常量
export {
    generatePages,
    PRESET_PAGES,
    DOMAINS,
    ACTIONS,
    WARNING_MESSAGES,
    ERROR_MESSAGES,
    INFO_MESSAGES,
    NextJsPagesGenerator,
};