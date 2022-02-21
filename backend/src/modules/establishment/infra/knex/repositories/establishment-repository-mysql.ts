import { Knex } from 'knex'
import { Establishment } from '../../../../../shared/domain/Establishment'
import { buildQuery } from '../../../../../shared/infra/database/knex/utils/sql_builder/buildQuery'
import { addDelete } from '../../../../../shared/infra/database/knex/utils/sql_builder/addDelete'
import { addUpdate } from '../../../../../shared/infra/database/knex/utils/sql_builder/addUpdate'
import { addWhere } from '../../../../../shared/infra/database/knex/utils/sql_builder/addWhere'
import { Builder } from '../../../../../shared/protocols/repositories/builder'
import { IRepository } from '../../../../../shared/protocols/repositories/repositories'
import { addInsert } from '../../../../../shared/infra/database/knex/utils/sql_builder/addInsert'

export class EstablishmentRepository implements IRepository<Establishment> {
  private readonly collectionName = 'establishments'
  private readonly db: Knex

  constructor ({ db }: any) {
    this.db = db
  }

  async find (params: Builder<Establishment>): Promise<Establishment[]> {
    return await buildQuery(this.db(this.collectionName),
      addWhere('id', params?.where?.id),
      addWhere('name', params?.where?.name),
      addWhere('officialName', params?.where?.officialName),
      addWhere('socialName', params?.where?.socialName),
      addWhere('type', params?.where?.type),
      addWhere('description', params?.where?.description),
      addWhere('email', params?.where?.email),
      addWhere('phoneNumber', params?.where?.phoneNumber),
      addWhere('website', params?.where?.website),
      addWhere('openDate', params?.where?.openDate),
      addWhere('closeDate', params?.where?.closeDate),
      addWhere('keywords', params?.where?.keywords),
      addWhere('segment', params?.where?.segment),
      addWhere('cnpj', params?.where?.cnpj),
      addWhere('imageURL', params?.where?.imageURL),
      addWhere('createdAt', params?.where?.createdAt),
      addWhere('updatedAt', params?.where?.updatedAt)
    )
  }

  async update (entity: Establishment, params: Builder<Establishment>): Promise<void> {
    void await buildQuery(this.db(this.collectionName),
      addUpdate<Establishment, Establishment>({ ...entity, updatedAt: new Date() }, params)
    )
  }

  async delete (params: Builder<Establishment>): Promise<void> {
    void await buildQuery(this.db(this.collectionName),
      addDelete<Establishment>(params)

    )
  }

  async save (entity: Establishment): Promise<void> {
    void await buildQuery(this.db(this.collectionName),
      addInsert<Establishment>(entity)
    )
  }
}
