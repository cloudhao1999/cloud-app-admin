import type { Directive, DirectiveBinding } from "vue";

import permissionService from "@/hooks/usePermission";

function isAuth(el: Element, binding: any) {
  const { hasPermission } = permissionService;

  const value = binding.value;
  if (!value) return;
  if (!hasPermission(value)) {
    el.parentNode?.removeChild(el);
  }
}

const mounted = (el: Element, binding: DirectiveBinding<any>) => {
  isAuth(el, binding);
};

const authDirective: Directive = {
  mounted
};

export default authDirective;
