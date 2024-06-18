import { Subject } from 'rxjs';
import { DestroyRef, inject } from '@angular/core';

export function DestroyHelper(): Subject<void> {
  const destroyed = new Subject<void>();

  inject(DestroyRef).onDestroy(() => {
    destroyed.next();
    destroyed.complete();
  });

  return destroyed;
}
