import { Knex } from 'knex'
import { Customer } from '../../../../../shared/domain/customers'
import { addDelete } from '../../../../../shared/infra/database/knex/utils/sql_builder/addDelete'
import { addInsert } from '../../../../../shared/infra/database/knex/utils/sql_builder/addInsert'
import { addUpdate } from '../../../../../shared/infra/database/knex/utils/sql_builder/addUpdate'
import { addWhere } from '../../../../../shared/infra/database/knex/utils/sql_builder/addWhere'
import { buildQuery } from '../../../../../shared/infra/database/knex/utils/sql_builder/buildQuery'
import { Builder } from '../../../../../shared/protocols/repositories/builder'
import { IRepository } from '../../../../../shared/protocols/repositories/repositories'

export class CustomerRepository implements IRepository<Customer> {
  private readonly collectionName = 'customers'
  private readonly db: Knex

  constructor ({ db }: any) {
    this.db = db
  }

  async find (params: Builder<Customer>): Promise<Customer[]> {
    return await buildQuery(this.db(this.collectionName),
      addWhere('id', params?.where?.id),
      addWhere('name', params?.where?.firstName),
      addWhere('name', params?.where?.lastName),
      addWhere('firstName', params?.where?.firstName),
      addWhere('lastName', params?.where?.lastName),
      addWhere('email', params?.where?.email),
      addWhere('password', params?.where?.password),
      addWhere('cpf', params?.where?.cpf),
      addWhere('rg', params?.where?.rg),
      addWhere('gender', params?.where?.gender),
      addWhere('birthDate', params?.where?.birthDate),
      addWhere('phoneNumber', params?.where?.phoneNumber),
      addWhere('postalCode', params?.where?.postalCode),
      addWhere('country', params?.where?.country),
      addWhere('state', params?.where?.state),
      addWhere('city', params?.where?.city),
      addWhere('publicPlace', params?.where?.publicPlace),
      addWhere('number', params?.where?.number),
      addWhere('district', params?.where?.district),
      addWhere('supplement', params?.where?.supplement)
    )
  }

  async update (entity: Customer, params: Builder<Customer>): Promise<void> {
    void await buildQuery(this.db(this.collectionName),
      addUpdate<Customer, Partial<Customer>>({ ...entity, updatedAt: new Date() }, params)
    )
  }

  async delete (params: Builder<Customer>): Promise<void> {
    void await buildQuery(this.db(this.collectionName),
      addDelete<Customer>(params)

    )
  }

  async save (entity: Customer): Promise<void> {
    void await buildQuery(this.db(this.collectionName),
      addInsert<Customer>(entity)
    )
  }
}
