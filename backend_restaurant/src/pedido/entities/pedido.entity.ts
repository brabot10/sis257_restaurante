import { ClienteEntity } from 'src/clientes/entities/cliente.entity';
import { Detalle } from 'src/detalles/entities/detalle.entity';
import { PlatilloEntity } from 'src/platillos/entities/platillo.entity';
import { RepartidorEntity } from 'src/repartidor/entities/repartidor.entity';

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('pedidos')
export class PedidoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  direccion: string;

  @Column({ type: 'int', nullable: false })
  cantidad: number;

  @Column({ type: 'int', nullable: false })
  total: number;

  @CreateDateColumn({ name: 'hora_pedido' })
  horaPedido: TimeRanges;

  @CreateDateColumn({ name: 'fecha_pedido' })
  fechaPedido: Date;

  @Column({ name: 'id_repartidor' })
  idRepartidor: number;

  @Column({ name: 'id_repartidor' })
  idCliente: number;

  @Column({ name: 'id_repartidor' })
  idPlatillo: number;

  @ManyToOne(() => RepartidorEntity, repartidor => repartidor.pedidos)
  @JoinColumn({ name: 'id_repartidor', referencedColumnName: 'id' })
  repartidor: RepartidorEntity;

  @ManyToOne(() => ClienteEntity, clientes => clientes.pedidos)
  @JoinColumn({ name: 'id_cliente', referencedColumnName: 'id' })
  Cliente: RepartidorEntity;

  @ManyToOne(() => PlatilloEntity, platillos => platillos.pedidos)
  @JoinColumn({ name: 'id_platillo', referencedColumnName: 'id' })
  Platillo: RepartidorEntity;

  @OneToMany(() => PlatilloEntity, platillos => platillos.pedidos)
  platillos: PlatilloEntity[];

  @OneToMany(() => Detalle, detalles => detalles.pedidos)
  detalles: Detalle[];
}
