import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const todo: AppRouteModule = {
  path: '/todo/todo',
  name: 'Test',
  component: LAYOUT,
  redirect: '/todo/todo/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: t('routes.dashboard.todo.title'),
    orderNo: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'ToDoPage',
      component: () => import('/@/views/sys/todo/index.vue'),
      meta: {
        title: t('routes.dashboard.todo.title'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default todo;
