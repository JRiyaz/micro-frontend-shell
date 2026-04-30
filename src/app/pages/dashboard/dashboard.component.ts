import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableDirective, DroppableDirective } from 'ui-shared';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DraggableDirective, DroppableDirective],
  template: `
    <div class="p-4 sm:p-5 max-w-6xl mx-auto animate-fade-in">
      <div
        class="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-5 gap-3"
      >
        <div>
          <h2
            class="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            Dashboard
          </h2>
          <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Track your inventory and upcoming orders.
          </p>
        </div>
        <div
          class="flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full"
        >
          <span class="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          <span
            class="text-[10px] font-black uppercase tracking-widest text-primary"
            >Live Updates Active</span
          >
        </div>
      </div>

      <!-- Stats Grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6"
      >
        <div
          *ngFor="let stat of stats; let i = index"
          class="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] shadow-sm dark:shadow-none backdrop-blur-md p-3.5 rounded-xl group hover:border-primary/30 transition-all hover:scale-[1.02] cursor-default"
          [class]="'border-l-4 ' + stat.borderColor"
        >
          <p
            class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1"
          >
            {{ stat.label }}
          </p>
          <div class="flex items-end justify-between">
            <h3 class="text-xl font-black text-slate-900 dark:text-white">
              {{ stat.value }}
            </h3>
            <p
              class="text-[10px] font-black uppercase"
              [class]="stat.changeColor"
            >
              {{ stat.change }}
            </p>
          </div>
        </div>
      </div>

      <!-- Kanban Columns -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div
          *ngFor="let col of columns; let colIndex = index"
          class="flex flex-col rounded-xl bg-slate-50/50 dark:bg-white/[0.01] p-3 min-h-[350px] border border-transparent hover:border-slate-200 dark:hover:border-white/[0.05] transition-all"
          uiDroppable
          (dropped)="onItemDrop($event, colIndex)"
        >
          <div
            class="flex items-center justify-between mb-4 flex-shrink-0 relative pb-3 border-b border-slate-200 dark:border-white/[0.08]"
          >
            <div class="flex items-center gap-2">
              <span
                class="text-xs font-black uppercase tracking-[0.2em]"
                [class]="col.color"
                >{{ col.title }}</span
              >
              <span
                class="px-2 py-0.5 bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] rounded-lg text-[9px] font-black text-slate-500 dark:text-slate-400"
                >{{ col.items.length }}</span
              >
            </div>
            <!-- Drop Indicator Line -->
            <div
              class="drop-indicator absolute bottom-[-1px] left-0 w-full h-[2px] bg-transparent transition-all duration-300"
            ></div>
          </div>
          <!-- Droppable area -->
          <div class="flex-1 space-y-3">
            <div
              *ngFor="let item of col.items"
              [uiDraggable]="{ item: item, sourceColIndex: colIndex }"
              class="bg-white dark:bg-dark-elevated border border-slate-200 dark:border-white/[0.08] shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/40 p-3 rounded-xl transition-all cursor-grab active:cursor-grabbing group"
            >
              <div class="flex justify-between items-start mb-2">
                <span
                  class="px-2 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-wider"
                  [class]="item.priorityClass"
                  >{{ item.priority }}</span
                >
                <span
                  class="text-[9px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-widest group-hover:text-primary transition-colors"
                  >{{ item.id }}</span
                >
              </div>
              <h4
                class="font-bold text-sm text-slate-900 dark:text-white mb-2 leading-snug"
              >
                {{ item.title }}
              </h4>
              <p
                class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed mb-3"
              >
                {{ item.description }}
              </p>
              <div
                class="flex justify-between items-center pt-3 border-t border-slate-100 dark:border-white/[0.04]"
              >
                <div class="flex -space-x-2">
                  <div *ngFor="let a of item.avatars" class="relative">
                    <img
                      [src]="a"
                      class="w-6 h-6 rounded-full border-2 border-white dark:border-dark-elevated shadow-sm"
                    />
                  </div>
                </div>
                <div
                  class="flex items-center gap-1.5 text-slate-400 dark:text-slate-500"
                >
                  <svg
                    class="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span class="text-[10px] font-bold">{{ item.due }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host ::ng-deep .ui-drag-over .drop-indicator {
        background-color: var(--theme-primary);
        box-shadow: 0 0 12px var(--theme-primary);
      }
    `,
  ],
})
export class DashboardComponent {
  stats = [
    {
      label: 'Total Products',
      value: '2,481',
      change: '↑ 12% from last month',
      borderColor: 'border-l-blue-500',
      changeColor: 'text-green-400',
    },
    {
      label: 'Low Stock',
      value: '23',
      change: '↓ 5 since yesterday',
      borderColor: 'border-l-amber-500',
      changeColor: 'text-green-400',
    },
    {
      label: 'Orders Pending',
      value: '142',
      change: '↑ 8 new today',
      borderColor: 'border-l-primary',
      changeColor: 'text-primary',
    },
    {
      label: 'Revenue',
      value: '$48.2k',
      change: '↑ 18% this quarter',
      borderColor: 'border-l-green-500',
      changeColor: 'text-green-400',
    },
  ];

  onItemDrop(data: any, targetColIndex: number) {
    const { item, sourceColIndex } = data;
    if (sourceColIndex === targetColIndex) return;

    // Remove from source
    this.columns[sourceColIndex].items = this.columns[
      sourceColIndex
    ].items.filter((i: any) => i.id !== item.id);

    // Add to target
    this.columns[targetColIndex].items.push(item);
  }

  columns = [
    {
      title: 'Pending',
      color: 'text-slate-500 dark:text-slate-400',
      items: [
        {
          id: 'INV-201',
          title: 'Restock Warehouse A',
          description: 'Electronics section running low on 15 SKUs...',
          priority: 'Urgent',
          priorityClass: 'bg-red-500/20 text-red-400',
          avatars: [
            'https://ui-avatars.com/api/?name=A&size=20&background=3b429f&color=fff',
          ],
          due: '2 days left',
        },
        {
          id: 'INV-198',
          title: 'Supplier Invoice Review',
          description: 'Review Q2 invoices from 3 suppliers...',
          priority: 'Medium',
          priorityClass: 'bg-blue-500/20 text-blue-400',
          avatars: [
            'https://ui-avatars.com/api/?name=B&size=20&background=6d74ff&color=fff',
          ],
          due: '5 days left',
        },
      ],
    },
    {
      title: 'In Progress',
      color: 'text-primary',
      items: [
        {
          id: 'INV-195',
          title: 'Inventory Audit - Zone B',
          description: 'Physical count vs system records for Zone B...',
          priority: 'High',
          priorityClass: 'bg-amber-500/20 text-amber-400',
          avatars: [
            'https://ui-avatars.com/api/?name=C&size=20&background=3b429f&color=fff',
            'https://ui-avatars.com/api/?name=D&size=20&background=6d74ff&color=fff',
          ],
          due: 'In progress',
        },
      ],
    },
    {
      title: 'Completed',
      color: 'text-green-500',
      items: [
        {
          id: 'INV-190',
          title: 'Setup Barcode System',
          description: 'Barcode scanning integration complete...',
          priority: 'Done',
          priorityClass: 'bg-green-500/20 text-green-400',
          avatars: [
            'https://ui-avatars.com/api/?name=E&size=20&background=3b429f&color=fff',
          ],
          due: 'Completed',
        },
      ],
    },
  ];
}
