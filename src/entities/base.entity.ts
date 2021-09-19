import { PrimaryGeneratedColumn } from 'typeorm';

import { Column } from 'typeorm';

import { UpdateDateColumn } from 'typeorm';
import { CreateDateColumn } from 'typeorm';

// , , ,  /
export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @Column({ type: 'boolean', default: false })
  is_archived: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  create_date_time: Date;

  @Column({ type: 'varchar', length: 300, default: 'self' })
  created_by: string;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  last_changed_date_time: Date;

  @Column({ type: 'varchar', length: 300, default: 'self' })
  last_changed_by: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  internal_comment: string | null;
}
