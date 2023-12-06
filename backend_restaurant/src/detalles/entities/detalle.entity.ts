import { Cliente } from 'src/clientes/entities/cliente.entity';
import { PedidoEntity } from 'src/pedido/entities/pedido.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('detalles')
export class Detalle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 15, nullable: false })
  direccionEstado: string;

  @Column({ type: 'varchar', length: 150, nullable: false })
  puntuacion: string;

  @Column({ type: 'varchar', length: 150, nullable: false })
  credibilidad: string;

  @Column({ type: 'varchar', length: 150, nullable: false })
  amabilidad: string;

  @Column({ name: 'id_pedido' })
  idPedido: number;

  @Column({ name: 'id_pedido' })
  idCliente: number;

  @ManyToOne(() => PedidoEntity, pedidos => pedidos.detalles)
  @JoinColumn({ name: 'id_pedido', referencedColumnName: 'id' })
  pedidos: PedidoEntity;

  @OneToMany(() => Cliente, cliente => cliente.detalles)
  clientes: Cliente;
}
