import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableDirective, DroppableDirective } from 'ui-shared';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DraggableDirective, DroppableDirective],
  template: `
    <div class="p-6 sm:p-8 max-w-6xl mx-auto">
      <div
        class="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4"
      >
        <div>
          <h2
            class="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            Dashboard
          </h2>
          <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Track your inventory and upcoming orders.
          </p>
        </div>
        <button
          class="px-5 py-2.5 bg-[#6d74ff] text-white rounded-xl font-bold text-sm hover:bg-[#5a61e6] transition-all"
        >
          + Add Product
        </button>
      </div>

      <!-- Stats Grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10"
      >
        <div
          *ngFor="let stat of stats"
          class="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] shadow-sm dark:shadow-none backdrop-blur-md p-5 rounded-2xl"
          [class]="'border-l-4 ' + stat.borderColor"
        >
          <p
            class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1"
          >
            {{ stat.label }}
          </p>
          <h3 class="text-2xl font-black text-slate-900 dark:text-white">
            {{ stat.value }}
          </h3>
          <p class="text-xs mt-1" [class]="stat.changeColor">
            {{ stat.change }}
          </p>
        </div>
      </div>

      <!-- Kanban Columns -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div
          *ngFor="let col of columns; let colIndex = index"
          class="space-y-3 flex flex-col rounded-xl"
          uiDroppable
          (dropped)="onItemDrop($event, colIndex)"
        >
          <div
            class="flex items-center justify-between mb-3 flex-shrink-0 relative pb-3 border-b border-slate-200 dark:border-white/[0.06]"
          >
            <span
              class="text-xs font-bold uppercase tracking-widest"
              [class]="col.color"
              >{{ col.title }}</span
            >
            <span
              class="px-2 py-0.5 bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06] rounded text-[10px] font-bold text-slate-500 dark:text-slate-400"
              >{{ col.items.length }}</span
            >
            <!-- Drop Indicator Line -->
            <div
              class="drop-indicator absolute bottom-[-1px] left-0 w-full h-[2px] bg-transparent transition-colors duration-200"
            ></div>
          </div>
          <!-- Droppable area min-height so it's always droppable -->
          <div
            class="flex-1 space-y-3 rounded-xl min-h-[200px] transition-colors p-1 -m-1"
          >
            <div
              *ngFor="let item of col.items"
              [uiDraggable]="{ item: item, sourceColIndex: colIndex }"
              class="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] shadow-sm dark:shadow-none backdrop-blur-md p-4 rounded-xl hover:border-[#6d74ff]/50 dark:hover:border-[#6d74ff]/30 transition-colors cursor-grab active:cursor-grabbing"
            >
              <div class="flex justify-between items-start mb-2">
                <span
                  class="px-2 py-0.5 rounded text-[10px] font-bold uppercase"
                  [class]="item.priorityClass"
                  >{{ item.priority }}</span
                >
                <span
                  class="text-[10px] text-slate-500 dark:text-slate-400 font-mono"
                  >{{ item.id }}</span
                >
              </div>
              <h4 class="font-bold text-sm text-slate-900 dark:text-white mb-1">
                {{ item.title }}
              </h4>
              <p
                class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2"
              >
                {{ item.description }}
              </p>
              <div
                class="flex justify-between items-center pt-3 mt-3 border-t border-slate-200 dark:border-white/[0.06]"
              >
                <div class="flex -space-x-1.5">
                  <img
                    *ngFor="let a of item.avatars"
                    [src]="a"
                    class="w-5 h-5 rounded-full border border-white dark:border-[#0a0b1e]"
                  />
                </div>
                <span class="text-[10px] text-slate-500 dark:text-slate-400">{{
                  item.due
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      /* Target the drop-indicator inside a column that is being dragged over */
      :host ::ng-deep .ui-drag-over .drop-indicator {
        background-color: #22c55e; /* Green color to show valid drop */
        box-shadow: 0 0 8px rgba(34, 197, 94, 0.4);
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
      borderColor: 'border-l-[#6d74ff]',
      changeColor: 'text-[#6d74ff]',
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
      color: 'text-[#6d74ff]',
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
